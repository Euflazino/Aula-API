import {View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';
import axios from 'axios';
         
export default props => {

  const [temperatura, setTemperatura] = useState('')
  const [temperaturaResultado, setTemperaturaResultado] = useState({})

  async function buscarTemperatura(){
     const resultado = await axios.get('https://goweather.herokuapp.com/weather/+temperatura+');

     setTemperaturaResultado(resultado.data);

  }

  return (
    <View>
      <Text>Tempratura</Text>
      <TextInput
       placeholder="Digite sua cidade"
       onChangeText={setTemperatura}
       />

      <Button
       title="Pesquisar" 
       onPress={buscarTemperatura}
       />

      <Text>Temperatura: {temperaturaResultado.temperature}</Text>
      <Text>Vento: {temperaturaResultado.wind}</Text>

    </View>
  )
}

