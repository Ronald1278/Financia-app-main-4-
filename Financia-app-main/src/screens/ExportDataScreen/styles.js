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
  },
  description: {
    fontSize: 14,
    color: colors.textGray,
    lineHeight: 21,
    marginBottom: spacing.lg,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
    gap: spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  optionInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textDark,
  },
  optionDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.textGray,
  },
});
