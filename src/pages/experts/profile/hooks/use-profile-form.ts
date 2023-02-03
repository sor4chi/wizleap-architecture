import { expertProfileRequest } from "@/infrastructure/expert/profile";
import { onMounted, reactive, ref } from "vue";

export const useProfileForm = () => {
  const isEditMode = ref(false);

  const profile = reactive({
    name: "",
    email: "",
  });

  const newProfile = reactive({
    name: "",
    email: "",
  });

  const fetchProfile = async () => {
    const res = await expertProfileRequest.show("1");
    const body = await res.json();
    Object.assign(profile, body);
  };

  onMounted(() => {
    fetchProfile();
  });

  const submit = async () => {
    const res = await expertProfileRequest.update("1", {
      name: newProfile.name,
      email: newProfile.email,
    });

    if (!res.ok) return;
    if (res.status === 400) return;

    const body = await res.json();
    Object.assign(profile, body);
    isEditMode.value = false;
  };

  return {
    isEditMode,
    profile,
    newProfile,
    submit,
  };
};
