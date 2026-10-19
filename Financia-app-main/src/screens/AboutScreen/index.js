import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import FormHeader from "../../components/FormHeader";
import { styles } from "./styles";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <FormHeader title="Sobre o app" onBack={() => router.back()} />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="wallet-outline" size={48} color="#FFFFFF" />
        </View>

        <Text style={styles.appName}>Financia-app</Text>

        <Text style={styles.description}>
          Organize suas finanças pessoais, acompanhe suas receitas e despesas e
          tenha mais controle sobre seu dinheiro.
        </Text>

        <Text style={styles.version}>Versão 1.0.0</Text>
      </View>
    </View>
  );
}
