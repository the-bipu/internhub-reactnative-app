import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress }: any) => {
  return (
      <TouchableOpacity className='w-10 h-10 bg-white rounded-sm flex items-center justify-center' onPress={handlePress}>
        <Image 
          source={iconUrl} 
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
  )
}

export default ScreenHeaderBtn;