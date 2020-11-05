import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import DividerContainer from '../../../components/atoms/Dividers/DividerContainer'
import EditText from '../../../components/atoms/Inputs/EditText'
import { gamingActions } from '../../../../features/gaming'

type EditTextGamingProps = {
    word : {
        value : string;
        key : string;
    }
}
const EditTextGaming = ({word : {key,value}}:EditTextGamingProps) => {
    const dispatch = useDispatch();
    return (
    <DividerContainer m="20px 10px">
        <EditText placeholder={key} defaultValue={value} name={key} onKeyUp={({name,value}) => {
            dispatch(gamingActions.writeWord({
                key:name,
                value
            }))
        }} />
    </DividerContainer>
    )
}

export default memo(EditTextGaming)
