import styled from "styled-components";
import Button from "../../../components/Button";

interface EmptyStateCardProps {
  sectionTitle: string,
  message: string,
  buttonText: string,
  to?: string
}

const EmptyStateCard = ({ sectionTitle, message , buttonText, to }: EmptyStateCardProps) => {
return <Div>
  <h3>{sectionTitle}</h3>
  <div className="content-empty-state-card">
  <p className="text-empty-state-card">{message}</p>
  <Button buttonText={buttonText} buttonSize="sm" to={to}/>
  </div>
</Div>
}

export default EmptyStateCard;

const Div = styled.div`
  flex: 1;
  outline: 2px solid #3d3e40;
  margin-top: 2.5rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 15px;

  & h3 {
    margin: 0;
    font-size: 0.7rem;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem);  
    font-weight: 500;
  }

  .content-empty-state-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-height: 150px;
  }

  .text-empty-state-card {
    font-size: 0.7rem;
    font-size: clamp(0.7rem, 0.6799999999999999rem + 0.10000000000000009vw, 0.8rem);
  }
`