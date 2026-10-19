import { StyleSheet } from "react-native";
import { colors, spacing } from "../../theme/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 24,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.textGray,
    textAlign: "center",
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: 12,
    marginTop: spacing.xl,
    width: "100%",
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: colors.textDark,
  },
});
