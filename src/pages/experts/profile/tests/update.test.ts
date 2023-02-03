// @vitest-environment jsdom
import { expect, describe, it, afterEach } from "vitest";
import Page from "../page.vue";
import { render, cleanup } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import t from "../i18n.json";

describe("Expert Profile Page", () => {
  afterEach(cleanup);

  it("should render", () => {
    const { getByText } = render(Page);
    expect(getByText(t.PAGE_TITLE)).toBeTruthy();
  });

  it("should toggle the edit mode", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, getByPlaceholderText } = render(Page);
    const checkbox = getByRole("checkbox");
    expect(checkbox).toBeTruthy();
    expect(getByText(t.MODE_VIEW)).toBeTruthy();
    await user.click(checkbox);
    expect(getByText(t.MODE_EDIT)).toBeTruthy();
    const nameInput = getByPlaceholderText(t.NAME_INPUT_PLACEHOLDER);
    const emailInput = getByPlaceholderText(t.EMAIL_INPUT_PLACEHOLDER);
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });

  it("should update the profile", async () => {
    const UPDATE_NAME = "test";
    const UPDATE_EMAIL = "test@test.com";
    const user = userEvent.setup();
    const { getByRole, getByText, getByPlaceholderText } = render(Page);

    const checkbox = getByRole("checkbox");
    expect(checkbox).toBeTruthy();
    await user.click(checkbox);
    const nameInput = getByPlaceholderText(t.NAME_INPUT_PLACEHOLDER);
    const emailInput = getByPlaceholderText(t.EMAIL_INPUT_PLACEHOLDER);
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    await user.type(nameInput, UPDATE_NAME);
    await user.type(emailInput, UPDATE_EMAIL);
    const submitButton = getByText(t.SUBMIT_BUTTON_LABEL);
    expect(submitButton).toBeTruthy();
    await user.click(submitButton);
    expect(getByText(UPDATE_NAME)).toBeTruthy();
    expect(getByText(UPDATE_EMAIL)).toBeTruthy();
  });
});
