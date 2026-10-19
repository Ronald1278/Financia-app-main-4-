import { StyleSheet, StatusBar, Platform } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary || '#006847', // Cor verde principal do topo
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
    paddingHorizontal: 20,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloHeader: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  conteudoBranco: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  seletorMes: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textoMes: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  itemTransacao: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconeContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  infoTransacao: {
    flex: 1,
  },
  tituloTransacao: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  dataTransacao: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
  valorEntrada: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2E9E3E', // Verde para ganhos / receitas
  },
  valorSaida: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E0402F', // Vermelho para despesas
  },
});