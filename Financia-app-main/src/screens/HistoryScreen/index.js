import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../../components/BottomNav';
import { colors } from '../../theme/colors';
import { styles } from './styles';

// Dados idênticos aos do protótipo (Histórico / Agosto 2026)
const TRANSACOES = [
  { id: '1', titulo: 'Salário', data: '05/08/2026', valor: '+R$ 2.000,00', tipo: 'receita', icone: 'wallet-outline', bgIcone: '#E8F5E9', corIcone: '#2E9E3E' },
  { id: '2', titulo: 'Mercado', data: '16/08/2026', valor: '-R$ 150,00', tipo: 'despesa', icone: 'cart-outline', bgIcone: '#FFEBEE', corIcone: '#E0402F' },
  { id: '3', titulo: 'Transporte', data: '16/08/2026', valor: '-R$ 20,00', tipo: 'despesa', icone: 'car-outline', bgIcone: '#E3F2FD', corIcone: '#4DA6FF' },
  { id: '4', titulo: 'Restaurante', data: '15/08/2026', valor: '-R$ 45,00', tipo: 'despesa', icone: 'restaurant-outline', bgIcone: '#FFF3E0', corIcone: '#FF9800' },
  { id: '5', titulo: 'Cinema', data: '14/08/2026', valor: '-R$ 30,00', tipo: 'despesa', icone: 'film-outline', bgIcone: '#F3E5F5', corIcone: '#9C27B0' },
  { id: '6', titulo: 'Freelance', data: '10/08/2026', valor: '+R$ 200,00', tipo: 'receita', icone: 'cash-outline', bgIcone: '#E8F5E9', corIcone: '#2E9E3E' },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary || '#006847'} />

      {/* Topo Verde */}
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Histórico</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="options-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Lista de Movimentações */}
      <View style={styles.conteudoBranco}>
        <View style={styles.seletorMes}>
          <Text style={styles.textoMes}>Agosto / 2026</Text>
        </View>

        <FlatList
          data={TRANSACOES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemTransacao}>
              <View style={[styles.iconeContainer, { backgroundColor: item.bgIcone }]}>
                <Ionicons name={item.icone} size={22} color={item.corIcone} />
              </View>

              <View style={styles.infoTransacao}>
                <Text style={styles.tituloTransacao}>{item.titulo}</Text>
                <Text style={styles.dataTransacao}>{item.data}</Text>
              </View>

              <Text style={item.tipo === 'receita' ? styles.valorEntrada : styles.valorSaida}>
                {item.valor}
              </Text>
            </View>
          )}
        />
      </View>

      {/* Menu Inferior */}
      <BottomNav activeTab="History" />
    </View>
  );
}