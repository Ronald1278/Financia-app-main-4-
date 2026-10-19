import React from "react";

import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const SETTINGS_OPTIONS = [
  {
    title: "Categorias",
    icon: "grid",
  },
  {
    title: "Metas",
    icon: "disc-outline",
  },
  {
    title: "Exportar dados",
    icon: "share-outline",
  },
  {
    title: "Segurança",
    icon: "lock-closed",
  },
  {
    title: "Sobre o app",
    icon: "information-circle-outline",
  },
  {
    title: "Ajuda",
    icon: "help-circle",
  },
];

export default function SettingsScreen() {
  const router = useRouter();
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {SETTINGS_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.title}
            style={styles.option}
            activeOpacity={0.7}
            onPress={() => {
              if (option.title === "Sobre o app") {
                router.push("/about");
              } else if (option.title === "Categorias") {
                router.push("/categories");
              } else if (option.title === "Exportar dados") {
                router.push("/export-data");
              } else if (option.title === "Segurança") {
                router.push("/security");
              } else if (option.title === "Ajuda") {
                router.push("/help");
              } else {
                console.log("Opção selecionada:", option.title);
              }
            }}
          >
            <Ionicons name={option.icon} size={20} color={colors.textDark} />

            <Text style={styles.optionText}>{option.title}</Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textGray}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNav
        activeTab="config"
        onChangeTab={(tab) => {
          if (tab === "inicio") {
            router.push("/");
          }
        }}
      />
    </View>
  );
}
