import { BackgroundImage, DirectoryItemContainer, Body} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const Directory = ({ title, imageUrl, route }) => {

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler }>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer> 
    );
}

export default Directory;