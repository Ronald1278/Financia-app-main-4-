import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import FormHeader from "../../components/FormHeader";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const HELP_ITEMS = [
  {
    question: "Como adicionar uma receita?",
    answer:
      "Na tela inicial, toque no botão de adicionar e escolha a opção Receita para registrar uma entrada de dinheiro.",
    icon: "trending-up-outline",
  },
  {
    question: "Como adicionar uma despesa?",
    answer:
      "Na tela inicial, toque no botão de adicionar e escolha a opção Despesa para registrar um gasto.",
    icon: "trending-down-outline",
  },
  {
    question: "Como acompanhar minhas finanças?",
    answer:
      "Utilize as telas de Histórico e Relatórios para consultar suas movimentações e visualizar informações financeiras.",
    icon: "stats-chart-outline",
  },
  {
    question: "Para que servem as configurações?",
    answer:
      "Na tela Configurações, você encontra opções relacionadas às categorias, exportação de dados, segurança, informações do aplicativo e ajuda.",
    icon: "settings-outline",
  },
];

export default function HelpScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <FormHeader title="Ajuda" onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="help-circle-outline"
              size={42}
              color={colors.primary}
            />
          </View>

          <Text style={styles.title}>Como podemos ajudar?</Text>

          <Text style={styles.description}>
            Confira algumas orientações para utilizar o Financia-app.
          </Text>
        </View>

        {HELP_ITEMS.map((item) => (
          <View key={item.question} style={styles.helpItem}>
            <View style={styles.questionRow}>
              <Ionicons name={item.icon} size={21} color={colors.primary} />

              <Text style={styles.question}>{item.question}</Text>
            </View>

            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
