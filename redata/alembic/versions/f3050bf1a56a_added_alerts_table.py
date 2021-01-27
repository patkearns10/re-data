"""Added alerts table

Revision ID: f3050bf1a56a
Revises: fbf81437ae12
Create Date: 2021-01-27 10:18:45.100580

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f3050bf1a56a'
down_revision = 'fbf81437ae12'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('alerts_alert',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(), nullable=True),
    sa.Column('severity', sa.Integer(), nullable=True),
    sa.Column('table_id', sa.Integer(), nullable=True),
    sa.Column('alert_type', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_alerts_alert_created_at'), 'alerts_alert', ['created_at'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_alerts_alert_created_at'), table_name='alerts_alert')
    op.drop_table('alerts_alert')
    # ### end Alembic commands ###
