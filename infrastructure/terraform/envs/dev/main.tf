module "zt_ref_cluster" {
  source = "./modules/compute"

  cluster_name = "zero-trust-reference-hub"
  node_count   = 3
}

module "zt_ref_db" {
  source = "./modules/database"

  instance_class = "db.t3.medium"
}

resource "kubernetes_namespace" "zt_ref" {
  metadata {
    name = "zero-trust-reference"
  }
}

resource "aws_security_group" "zt_ref_proxy" {
  name        = "zt-reference-access-proxy"
  description = "Security group for reference proxy implementation"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]
  }
}

resource "aws_prometheus_workspace" "zt_ref_metrics" {
  alias = "zt-reference-observability"
}
