import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types/types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
      className="border-2 border-indigo-600 hover:bg-indigo-200 hover:border-indigo-200 w-full p-3 flex justify-between rounded-lg"
      onClick={() => addItem(item)}
    >

        <p>{item.name}</p>
        <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
