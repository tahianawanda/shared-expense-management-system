import styled from "styled-components";

interface MetricCardProps {
  label: string,
  value?: number,
  icon: React.ReactNode
}

const MetricCard = ({ label, value = 5, icon }: MetricCardProps) => {
return <Div>
  <div className="header-metric-card">
    <span>{label}</span>
    {icon}
  </div>
  <div className="content-metric-card">
    {value}
  </div>
</Div>
}

export default MetricCard;

const Div = styled.div`
  padding: 2rem;
  width: 132.04px;
  border-radius: 15px;
  outline: 2px solid #3d3e40;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header-metric-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem);  
  }

  .content-metric-card {
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 1.4rem + 0.5vw, 2rem);
    font-weight: 800;
    color: #ffffff;
  }
`