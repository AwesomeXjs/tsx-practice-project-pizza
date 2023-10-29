import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import './styles.css'
import Pizza from '../models/Pizza'

interface AddPizzaFormProps {
	addPizza: (newPizza: Pizza) => void
}
const initialState = {
	title: '',
	price: '',
	img: '',
}
const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
	const [newPizza, setNewPizza] = useState<{
		title: string
		price: string
		img: string
	}>(initialState)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setNewPizza({
			...newPizza,
			[name]: value,
		})
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const { title, price, img } = newPizza
		if (title && price && img) {
			addPizza({ title, price: Number(price), img, id: Date.now() })
		}
		setNewPizza(initialState)
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='title'
					placeholder='Название'
					onChange={handleChange}
					value={newPizza.title}
				/>
				<input
					type='text'
					name='price'
					placeholder='Стоимость'
					onChange={handleChange}
					value={newPizza.price}
				/>
				<input
					type='text'
					name='img'
					placeholder='Изображение'
					onChange={handleChange}
					value={newPizza.img}
				/>
				<button type='submit'>+ Добавить в меню</button>
			</form>
		</>
	)
}

export default AddPizzaForm
