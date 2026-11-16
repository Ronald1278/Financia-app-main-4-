import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import BottomNav from '../../components/BottomNav';
import { styles } from './style';

// Dados das categorias conforme a tela de relatórios
const categoriesData = [
  { name: 'Alimentação', amount: 'R$ 400,00', percentage: '53%', color: '#2EB872' },
  { name: 'Transporte', amount: 'R$ 180,00', percentage: '24%', color: '#F06A4B' },
  { name: 'Lazer', amount: 'R$ 100,00', percentage: '13%', color: '#48C9B0' },
  { name: 'Educação', amount: 'R$ 70,00', percentage: '9%', color: '#4A90E2' },
  { name: 'Outros', amount: 'R$ 0,00', percentage: '0%', color: '#A0A2B1' },
];

export default function ReportsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho Verde */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Relatórios</Text>
      </View>

      {/* Conteúdo Principal Branco */}
      <View style={styles.contentCard}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <Text style={styles.title}>Gastos por categoria</Text>
          <Text style={styles.subtitle}>Agosto / 2026</Text>

          {/* Área do Gráfico */}
          <View style={styles.chartContainer}>
            <View style={styles.chartCircle}>
              <View style={styles.chartCenterText}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>R$ 750,00</Text>
              </View>
            </View>
          </View>

          {/* Lista das Categorias */}
          <View style={styles.categoriesList}>
            {categoriesData.map((item, index) => (
              <View key={index} style={styles.categoryRow}>
                <View style={styles.categoryLeft}>
                  <View style={[styles.colorDot, { backgroundColor: item.color }]} />
                  <Text style={styles.categoryName}>{item.name}</Text>
                </View>
                <View style={styles.categoryRight}>
                  <Text style={styles.categoryAmount}>{item.amount}</Text>
                  <Text style={styles.categoryPercentage}>{item.percentage}</Text>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>
      </View>

      {/* Menu Inferior */}
      <BottomNav
        activeTab="relatorios"
        onChangeTab={(tab) => {
          if (tab === 'inicio') {
            router.push('/');
          } else if (tab === 'historico') {
            router.push('/history');
          } else if (tab === 'config') {
            router.push('/settings');
          }
        }}
      />
    </SafeAreaView>
  );
}