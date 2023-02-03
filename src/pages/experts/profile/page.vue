<template>
  <div>
    <h1>{{ t.PAGE_TITLE }}</h1>
    <WizVStack>
      <WizHStack gap="md">
        <WizToggleSwitch v-model="isEditMode" />
        <WizText>{{ isEditMode ? t.MODE_EDIT : t.MODE_VIEW }}</WizText>
      </WizHStack>
      <WizFormGroup>
        <WizFormControl label="Name" required>
          <WizTextInput
            v-if="isEditMode"
            v-model="newProfile.name"
            name=""
            :placeholder="t.NAME_INPUT_PLACEHOLDER"
          />
          <WizText v-else line-height="xl6">{{ profile.name }}</WizText>
        </WizFormControl>
        <WizFormControl label="Email" required>
          <WizTextInput
            v-if="isEditMode"
            v-model="newProfile.email"
            name=""
            :placeholder="t.EMAIL_INPUT_PLACEHOLDER"
          />
          <WizText v-else line-height="xl6">{{ profile.email }}</WizText>
        </WizFormControl>
      </WizFormGroup>
      <WizTextButton v-if="isEditMode" @click="submit">
        {{ t.SUBMIT_BUTTON_LABEL }}
      </WizTextButton>
    </WizVStack>
  </div>
</template>

<script setup lang="ts">
import t from "./i18n.json";
import { useProfileForm } from "@/pages/experts/profile/hooks/use-profile-form";
import {
  WizToggleSwitch,
  WizFormGroup,
  WizFormControl,
  WizTextInput,
  WizTextButton,
  WizVStack,
  WizHStack,
  WizText,
} from "@wizleap-inc/wiz-ui-next";

const { isEditMode, profile, newProfile, submit } = useProfileForm();
</script>
