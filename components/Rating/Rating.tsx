import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Rating.module.css'
import StarIcon from './star.svg'

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean
	rating: number

	setRating?: (rating: number) => void
}

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating])


	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((rating, i) => {
			return <StarIcon
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
				})}
			/>
		})
		setRatingArray(updatedArray)
	}

	return (
		<div {...props}>
			{ratingArray.map((rating, i) => <span key={i}>{rating}</span>)}
		</div>
	)
}
