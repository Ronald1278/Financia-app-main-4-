import React from 'react';
import { useRouter } from 'expo-router';
import AddIncomeScreen from '../src/screens/AddIncomeScreen'; 

type IncomeData = {
  description: string;
  value: string;
  date: string;
};

export default function AddIncome() {
  const router = useRouter();

  return (
    <AddIncomeScreen
      onBack={() => router.back()}
      onSave={(data: IncomeData) => {
        console.log('Receita salva:', data);
        router.back();
      }}
    />
  );
}