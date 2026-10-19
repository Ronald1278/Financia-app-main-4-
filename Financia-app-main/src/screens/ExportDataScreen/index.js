import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import FormHeader from "../../components/FormHeader";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const EXPORT_OPTIONS = [
  {
    title: "Exportar para CSV",
    description: "Formato compatível com Excel e planilhas.",
    icon: "document-text-outline",
    format: "CSV",
  },
  {
    title: "Exportar para PDF",
    description: "Relatório formatado para consultar ou compartilhar.",
    icon: "document-outline",
    format: "PDF",
  },
];

export default function ExportDataScreen() {
  const router = useRouter();

  function handleExport(format) {
    Alert.alert(
      "Exportação",
      `A exportação em ${format} ainda precisa ser conectada aos dados financeiros do aplicativo.`,
    );
  }

  return (
    <View style={styles.screen}>
      <FormHeader title="Exportar dados" onBack={() => router.back()} />

      <View style={styles.content}>
        <Text style={styles.description}>
          Escolha um formato para exportar suas informações financeiras.
        </Text>

        {EXPORT_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.format}
            style={styles.option}
            activeOpacity={0.7}
            onPress={() => handleExport(option.format)}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={option.icon} size={24} color={colors.primary} />
            </View>

            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>{option.title}</Text>

              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textGray}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
