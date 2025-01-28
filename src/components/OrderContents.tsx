import { formatCurrency } from "../helpers"
import { OrderItem } from "../types/types"

type OrderContentProps = {
    order: OrderItem[]
}

export default function OrderContents({order} : OrderContentProps) {
    return (
        <div>
            <h2 className="text-3xl font-black">Consumo</h2>

            <div className="space-y-3 mt-5">
                { order.length === 0 ?
                    <p className="text-center">Res</p>
                : (
                    order.map(item => (
                        <div key={item.id}>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

