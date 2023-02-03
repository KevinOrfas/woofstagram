import React from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';
import { Formik } from 'formik';

const App = () => {
  function onSubmit(values) {
    if (values.confirmationPassword !== values.password) {
      alert('Password do not match');
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmationPassword: '',
        name: '',
        birthday: '',
        breed: '',
        toy: '',
      }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
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
              placeholder="Type your email here"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <InputWithLabel
              label="Password"
              placeholder="Type your password here"
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
            <InputWithLabel
              label="Confirm Password"
              placeholder="Confirm your password here"
              onChangeText={handleChange('confirmationPassword')}
              value={values.confirmationPassword}
              secureTextEntry
              onSubmitEditing={handleSubmit}
            />
            <InputWithLabel
              label="Name"
              placeholder="Type your dog's name here"
              onChangeText={handleChange('name')}
              value={values.name}
            />
            <InputWithLabel
              label="Date of birth"
              placeholder="Type your dog's date of birth here"
              onChangeText={handleChange('birthday')}
              value={values.birthday}
            />
            <InputWithLabel
              label="Breed"
              placeholder="Type your dog's breed of birth here"
              onChangeText={handleChange('breed')}
              value={values.breed}
            />
            <InputWithLabel
              label="Toy"
              placeholder="Type your dog's favorite toy here"
              onChangeText={handleChange('toy')}
              value={values.toy}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
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
