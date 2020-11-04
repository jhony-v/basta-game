import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import DividerContainer from '../../../components/atoms/Dividers/DividerContainer';
import ProgressBar from '../../../components/atoms/Status/ProgressBar';

const ProgressCompleteFields = () => {
    const percentage = useSelector<RootState>(state => state.gaming.percentage) as number;
    return (
    <DividerContainer m="40px 10px">
        <ProgressBar percentage={percentage} />
    </DividerContainer>
    )
}

export default ProgressCompleteFields
