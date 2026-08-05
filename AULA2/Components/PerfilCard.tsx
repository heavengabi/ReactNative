import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type Props = {
    nome: String
} 
const PerfilCard = ({nome}:Props)  =>  {
  return (
    <View>
      <Text style = {styles.texto}>Oieee {nome}</Text>
    </View>
  )
}

export default PerfilCard

const styles = StyleSheet.create({
texto:{
fontSize:30
}
})