import {
    FaFacebookSquare,
    FaFlickr,
    FaInstagramSquare,
    FaLinkedinIn,
    FaSnapchatSquare,
    FaTwitter,
} from 'react-icons/fa';
import { styled } from 'styled-components';

const SideFollow = styled.div`
    margin-bottom: var(--margin-medium-large);
    svg {
        color: var(--primary-200);
        font-size: var(--font-size-large);
        padding: var(--padding-small);
        margin: var(--margin-micro);
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    }
`;

export default function Follow() {
    return (
        <SideFollow>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaSnapchatSquare />
            <FaFlickr />
            <FaTwitter />
            <FaLinkedinIn />
        </SideFollow>
    );
}
