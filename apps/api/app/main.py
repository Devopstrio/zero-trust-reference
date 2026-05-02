from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from core.policies.engine import PolicyEngine, AccessProxy, ThreatEngine

app = FastAPI(title="Zero Trust Reference Architecture API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = PolicyEngine()
proxy = AccessProxy()
threats = ThreatEngine()

@app.get("/health")
def health():
    return {"status": "ok", "service": "zero-trust-reference"}

@app.post("/access/request")
def request_access(data: dict = Body(...)):
    identity = data.get("identity", {"id": "user-01", "claims": ["internal"]})
    resource = data.get("resource", "api-gateway")
    context = data.get("context", {"device_managed": True, "mfa_active": True})
    
    evaluation = engine.evaluate_access(identity, resource, context)
    proxy_resp = proxy.proxy_request(evaluation["decision"], resource)
    
    return {
        "evaluation": evaluation,
        "proxy": proxy_resp,
        "timestamp": time.time()
    }

@app.get("/dashboard/summary")
def get_summary():
    return {
        "total_active_users": 5420,
        "trust_posture_avg": 0.92,
        "blocked_attacks_24h": 142,
        "compliance_score": "98%",
        "system_status": "HARDENED"
    }

@app.get("/metrics")
def get_metrics():
    return {
        "avg_trust_evaluation_ms": 8.5,
        "anomaly_detection_velocity": 450,
        "policy_sync_latency_sec": 0.2
    }
