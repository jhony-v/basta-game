import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gamingActions } from '../../../../features/gaming'
import { Word } from '../../../../features/gaming/gaming'
import { RootState } from '../../../../store'
import EditTextGaming from './EditTextGaming'

const ListEditTextWord = () => {
    const dispatch = useDispatch();
    const words = useSelector<RootState>(state => state.gaming.words) as Word[];
    useEffect(() => {
        dispatch(gamingActions.calculatePercentage({}))
    },[words]);
  
    return (
        <ScrollView>
          {words.map((props, i) => (
              <EditTextGaming key={i} word={props} />
          ))}
        </ScrollView>
    )
}

export default ListEditTextWord
