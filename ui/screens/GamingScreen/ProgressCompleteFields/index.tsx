import React from 'react'
import { useSelector } from 'react-redux';
import { gamingSelectors } from '../../../../features/gaming';
import DividerContainer from '../../../components/atoms/Dividers/DividerContainer';
import ProgressBar from '../../../components/atoms/Status/ProgressBar';

const ProgressCompleteFields = () => {
    const percentage = useSelector(gamingSelectors.progressCompleteWordsGaming) as number;
    return (
    <DividerContainer mv="5px">
        <ProgressBar percentage={percentage} />
    </DividerContainer>
    )
}

export default ProgressCompleteFields
