import React from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { inspiration } from '../../../data/atom';

const SideInspiration = styled.div`
    background-color: var(--bg-200);
    padding: var(--padding-medium-large) 0;
    margin-bottom: var(--margin-medium-large);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const InspirationImg = styled.img`
    width: 180px;
    height: 120px;
    margin: var(--margin-small);
`;

export default function Inspiration() {
    const inspirationData = useRecoilValue(inspiration);

    return (
        <SideInspiration>
            {inspirationData.map((item, index) => {
                return <InspirationImg src={item.image_path} key={index} />;
            })}
        </SideInspiration>
    );
}
