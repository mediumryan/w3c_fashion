import React from 'react';
import { useRecoilValue } from 'recoil';
import { popular } from '../../../data/atom';
import { styled } from 'styled-components';
import PopularCard from './PopularCard';

const SidePopular = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--margin-medium-large);
    color: var(--text-100);
`;

export default function Popular() {
    const popularData = useRecoilValue(popular);

    return (
        <SidePopular>
            {popularData.map((item) => {
                return <PopularCard key={item.id} item={item} />;
            })}
        </SidePopular>
    );
}
