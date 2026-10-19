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
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },

  appName: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: spacing.md,
  },

  description: {
    fontSize: 16,
    color: colors.textGray,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 320,
  },

  version: {
    fontSize: 14,
    color: colors.textGray,
    marginTop: spacing.xl,
  },
});
