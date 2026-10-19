import { StyleSheet } from "react-native";
import { colors, spacing } from "../../theme/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  intro: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  iconContainer: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 14,
    color: colors.textGray,
    lineHeight: 21,
    textAlign: "center",
  },
  helpItem: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
    gap: spacing.sm,
  },
  questionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  question: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
  },
  answer: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textGray,
    paddingLeft: spacing.xl,
  },
});
