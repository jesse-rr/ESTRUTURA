import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { AsideProps } from '../models/AsideProps';

interface IconProps {
  icons: AsideProps[];
}

const Icon = ({ icons }: IconProps) => {
  return (
    <div className="icon-container">
      {icons.map(({ icon, label }, index) => (
        <div key={index} className="icon">
          <FontAwesomeIcon icon={icon} />
          { label && <span className="icon-label">{label}</span> }
        </div>
      ))}
    </div>
  );
};

export default Icon;
