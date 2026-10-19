import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View, Modal } from "react-native";

import { useRouter } from "expo-router";
import BalanceCard from "../../components/BalanceCard";
import BottomNav from "../../components/BottomNav";
import ExpenseItem from "../../components/ExpenseItem";
import Header from "../../components/Header";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

const RECENT_EXPENSES = [
  {
    id: "1",
    icon: "fast-food-outline",
    iconBg: colors.iconFoodBg,
    title: "Alimentação",
    date: "16/08/2026",
    value: 35,
  },
  {
    id: "2",
    icon: "car-outline",
    iconBg: colors.iconTransportBg,
    title: "Transporte",
    date: "16/08/2026",
    value: 20,
  },
  {
    id: "3",
    icon: "game-controller-outline",
    iconBg: colors.iconLeisureBg,
    title: "Lazer",
    date: "15/08/2026",
    value: 50,
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <Header userName="Marcos" month="Agosto" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard balance={1250} income={2000} expense={750} />

        <View style={styles.expensesHeader}>
          <Text style={styles.expensesTitle}>Despesas recentes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.expensesList}>
          {RECENT_EXPENSES.map((item) => (
            <ExpenseItem
              key={item.id}
              icon={item.icon}
              iconBg={item.iconBg}
              title={item.title}
              date={item.date}
              value={item.value}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>O que você deseja adicionar?</Text>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setModalVisible(false);
                router.push("/add-expense");
              }}
            >
              <Text style={styles.modalOptionText}>Despesa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setModalVisible(false);
                router.push("/add-income");
              }}
            >
              <Text style={styles.modalOptionText}>Receita</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <BottomNav
        activeTab="inicio"
        onChangeTab={(tab) => {
          if (tab === "config") {
            router.push("/settings");
          }
        }}
      />
    </View>
  );
}
