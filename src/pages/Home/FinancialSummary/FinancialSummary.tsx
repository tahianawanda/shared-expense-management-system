import styled from "styled-components";
import MetricCard from "./MetricCard";
import { metrics } from './metrics'

const FinancialSummary = () => {
return <Div>
  {metrics.map((metric) => (
    <MetricCard key={metric.id} label={metric.label} icon={<metric.Icon dimension={16} />}/>
  ))}

</Div>
}

export default FinancialSummary;

const Div = styled.div`
  display: flex;
  margin-top: 2.5rem;
  gap: 2rem;
`