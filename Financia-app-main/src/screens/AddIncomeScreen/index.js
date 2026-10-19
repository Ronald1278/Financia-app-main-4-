import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import { SaveButton, CancelButton } from '../../components/FormButtons';
import { colors } from '../../theme/colors';
import { styles } from './styles';

export default function AddIncomeScreen({ onBack, onSave }) {
  const [description, setDescription] = useState("Salário");
  const [value, setValue] = useState("2.000,00");
  const [date, setDate] = useState("05/08/2026");

  function handleSave() {
    onSave && onSave({ description, value, date });
  }

  return (
    <View style={styles.screen}>
      <FormHeader title="Nova Receita" onBack={onBack} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FormField
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          placeholder="Ex:Salário"
        />
        <FormField
          label="Valor"
          value={value}
          onChangeText={setValue}
          placeholder="R$ 0,00"
          keyboardType="numeric"
        />
      <FormField
          label="Data"
          value={date}
          onChangeText={setDate}
          placeholder="DD/MM/AAAA"
          rightIcon={
            <Ionicons name="calendar-outline" size={20} color={colors.textGray} />
          }
        />
      </ScrollView>

      <View style={styles.footer}>
        <SaveButton onPress={handleSave} />
        <CancelButton onPress={onBack} />
      </View>
    </View>
  );
}
