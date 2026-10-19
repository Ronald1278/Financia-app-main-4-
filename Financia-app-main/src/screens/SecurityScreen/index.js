import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import FormHeader from "../../components/FormHeader";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function SecurityScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <FormHeader title="Segurança" onBack={() => router.back()} />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="shield-checkmark-outline"
            size={44}
            color={colors.primary}
          />
        </View>

        <Text style={styles.title}>Segurança dos seus dados</Text>

        <Text style={styles.description}>
          Suas informações financeiras são importantes. Esta área será utilizada
          para reunir as opções de segurança disponíveis no aplicativo.
        </Text>

        <View style={styles.infoCard}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color={colors.primary}
          />

          <Text style={styles.infoText}>
            As opções de bloqueio por senha e biometria ainda não estão
            implementadas.
          </Text>
        </View>
      </View>
    </View>
  );
}
