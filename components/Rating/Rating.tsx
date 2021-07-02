import { DetailedHTMLProps, HTMLAttributes, useEffect, useState, KeyboardEvent } from 'react'
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
		const updatedArray = ratingArray.map((r, i) => {
			return <StarIcon
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable,
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				onclick={() => onClick(i + 1)}
				tabIndex={isEditable ? 0 : -1}
				onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
			/>
		})
		setRatingArray(updatedArray)
	}

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return
		}
		constructRating(i)
	}
	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return
		}
		setRating(i)
	}

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code !== 'Space' || !setRating) {
			return
		}
		setRating(i)
	}


	return (
		<div {...props}>
			{ratingArray.map((rating, i) => <span key={i}>{rating}</span>)}
		</div>
	)
}
