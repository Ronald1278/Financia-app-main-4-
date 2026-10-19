import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginHorizontal: spacing.lg,
  },
  expensesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
  },
  seeAll: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
  },
  expensesList: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
  },
  addButtonText: {
    color: colors.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.textDark,
  },
  modalOption: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  }
});