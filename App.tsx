import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Size, Variant } from "@people-interactive/paas-library";
import searchWhite from "./assets/icons/search-sm-white.png";
import searchPrimary from "./assets/icons/search-sm-primary.png";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.title}>Botões</Text>
        <Text style={styles.subtitle}>Primary</Text>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.XL} variant={Variant.PRIMARY}>
            <Button.Label size={Size.XL} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.LG} variant={Variant.PRIMARY}>
            <Button.Label size={Size.LG} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.MD} variant={Variant.PRIMARY}>
            <Button.Label size={Size.MD} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.SM} variant={Variant.PRIMARY}>
            <Button.Label size={Size.SM} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper2}>
          <Button.Root size={Size.XL} variant={Variant.PRIMARY}>
            <Button.Icon source={searchWhite} />
            <Button.Label size={Size.XL} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.LG} variant={Variant.PRIMARY}>
            <Button.Icon source={searchWhite} />
            <Button.Label size={Size.LG} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.MD} variant={Variant.PRIMARY}>
            <Button.Icon source={searchWhite} />
            <Button.Label size={Size.MD} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.SM} variant={Variant.PRIMARY}>
            <Button.Icon source={searchWhite} />
            <Button.Label size={Size.SM} variant={Variant.PRIMARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <Text style={[styles.subtitle, styles.space]}>Secondary</Text>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.XL} variant={Variant.SECONDARY}>
            <Button.Label size={Size.XL} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.LG} variant={Variant.SECONDARY}>
            <Button.Label size={Size.LG} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.MD} variant={Variant.SECONDARY}>
            <Button.Label size={Size.MD} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.SM} variant={Variant.SECONDARY}>
            <Button.Label size={Size.SM} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper2}>
          <Button.Root size={Size.XL} variant={Variant.SECONDARY}>
            <Button.Icon source={searchPrimary} />
            <Button.Label size={Size.XL} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.LG} variant={Variant.SECONDARY}>
            <Button.Icon source={searchPrimary} />
            <Button.Label size={Size.LG} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.MD} variant={Variant.SECONDARY}>
            <Button.Icon source={searchPrimary} />
            <Button.Label size={Size.MD} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.SM} variant={Variant.SECONDARY}>
            <Button.Icon source={searchPrimary} />
            <Button.Label size={Size.SM} variant={Variant.SECONDARY}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <Text style={[styles.subtitle, styles.space]}>Disabled</Text>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.XL} variant={Variant.DISABLED}>
            <Button.Label size={Size.XL} variant={Variant.DISABLED}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.LG} variant={Variant.DISABLED}>
            <Button.Label size={Size.LG} variant={Variant.DISABLED}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.MD} variant={Variant.DISABLED}>
            <Button.Label size={Size.MD} variant={Variant.DISABLED}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.SM} variant={Variant.DISABLED}>
            <Button.Label size={Size.SM} variant={Variant.DISABLED}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <Text style={[styles.subtitle, styles.space]}>Link</Text>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.XL} variant={Variant.LINK}>
            <Button.Label size={Size.XL} variant={Variant.LINK}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.LG} variant={Variant.LINK}>
            <Button.Label size={Size.LG} variant={Variant.LINK}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.MD} variant={Variant.LINK}>
            <Button.Label size={Size.MD} variant={Variant.LINK}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>

        <View style={styles.buttonWrapper}>
          <Button.Root size={Size.SM} variant={Variant.LINK}>
            <Button.Label size={Size.SM} variant={Variant.LINK}>
              Teste
            </Button.Label>
          </Button.Root>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 80,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 10,
  },
  buttonWrapper2: {
    marginTop: 30,
  },
  space: {
    marginTop: 40,
  },
});
