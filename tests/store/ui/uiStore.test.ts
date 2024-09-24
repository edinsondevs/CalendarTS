import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../../../src/store";
import { act, renderHook } from "@testing-library/react";
import { useUiStore } from "../../../src/hooks";

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe("useUiStore", () => {
	it("should return the correct properties and methods", () => {
		const mockDispatch = jest.fn();
		jest.mocked(useDispatch).mockReturnValue(mockDispatch);

		const mockState = { ui: { isDateModalOpen: false } };
		jest.mocked(useSelector).mockReturnValue(mockState);

		const { result } = renderHook(() => useUiStore());

		const { isDateModalOpen, openDateModal, closeDateModal } =
			result.current;

		expect(isDateModalOpen).toBeUndefined();

		act(() => {
			openDateModal();
		});
		expect(mockDispatch).toHaveBeenCalledWith(onOpenDateModal());

		act(() => {
			closeDateModal();
		});
		expect(mockDispatch).toHaveBeenCalledWith(onCloseDateModal());
	});
});
