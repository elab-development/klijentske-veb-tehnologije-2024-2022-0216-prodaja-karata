import "../components/Dugme.css";

interface DugmeProps {
  text: string;
  onClick?: () => void;
}

const ReusableDugme: React.FC<DugmeProps> = ({ text, onClick }) => {
  return (
    <button className="dugme" onClick={onClick}>
      {text}
    </button>
  );
};

export default ReusableDugme;
