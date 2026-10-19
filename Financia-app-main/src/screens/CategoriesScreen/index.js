import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import FormHeader from "../../components/FormHeader";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const CATEGORIES = [
  { name: "Alimentação", icon: "restaurant-outline", color: "#F2A541" },
  { name: "Transporte", icon: "car-outline", color: "#438BE5" },
  { name: "Lazer", icon: "game-controller-outline", color: "#A66BE0" },
  { name: "Educação", icon: "book-outline", color: "#36A3D9" },
  {
    name: "Outros",
    icon: "ellipsis-horizontal-circle-outline",
    color: "#8A8A8E",
  },
];

export default function CategoriesScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <FormHeader title="Categorias" onBack={() => router.back()} />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.description}>
          Categorias utilizadas para organizar suas despesas.
        </Text>

        {CATEGORIES.map((category) => (
          <View key={category.name} style={styles.category}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: `${category.color}20` },
              ]}
            >
              <Ionicons name={category.icon} size={22} color={category.color} />
            </View>

            <Text style={styles.categoryName}>{category.name}</Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textGray}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
