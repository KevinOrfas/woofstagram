import React, { useState } from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  function confirmPassWordMatch({ nativeEvent: { text } }) {
    if (text !== password) {
      alert('Password do not match');
    }
  }

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
        }}
      >
        <InputWithLabel
          label="Email"
          placeholder={'Type your email here'}
          value={email}
          onChangeText={setEmail}
        />
        <InputWithLabel
          label="Password"
          placeholder={'Type your password here'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <InputWithLabel
          label="Confirm Password"
          placeholder={'Confirm your password'}
          value={confirmationPassword}
          onChangeText={setConfirmationPassword}
          secureTextEntry
          onSubmitEditing={confirmPassWordMatch}
        />
        <InputWithLabel
          label="Name"
          placeholder={"Type your pet's name here"}
          value={name}
          onChangeText={setName}
        />
        <InputWithLabel
          label="Date of Birth"
          placeholder={"Type your pet's date of birth here"}
          value={birthday}
          onChangeText={setBirthday}
        />
        <InputWithLabel
          label="Breed"
          placeholder={"Type your pet's breed here"}
          value={breed}
          onChangeText={setBreed}
        />
        <InputWithLabel
          label="Toy"
          placeholder={"Type your pet's toy here"}
          value={toy}
          onChangeText={setToy}
        />
      </View>
    </ScrollView>
  );
};

function InputWithLabel(props) {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{ padding: 8, fontSize: 18 }}
      />
    </View>
  );
}

export default App;
