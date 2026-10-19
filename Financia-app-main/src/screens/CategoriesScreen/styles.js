import { StyleSheet } from "react-native";
import { colors, spacing } from "../../theme/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
  description: {
    fontSize: 14,
    color: colors.textGray,
    marginBottom: spacing.md,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
    gap: spacing.md,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryName: {
    flex: 1,
    fontSize: 15,
    color: colors.textDark,
  },
});
