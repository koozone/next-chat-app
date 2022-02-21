import PhotoItem, {PhotoRoundItem} from '../item/photoItem';
import PhotoList from '../list/photoList';
import PhotoSection from '../section/photoSection';
import {UseData} from '../vision';

export const PhotoModule = () => {
	const data = UseData({
		json: [
			{value: '', name: ''},
			{value: '', name: ''},
			{value: '', name: ''},
		],
	});

	return (
		// <div className="flex">
		// 	<PhotoSection className="w-1/2 h-screen">
		// 		<PhotoList item={<PhotoItem />} data={data} />
		// 	</PhotoSection>
		// 	<PhotoSection className="w-1/2 h-[300px]">
		// 		<PhotoList item={<PhotoRoundItem />} data={data} />
		// 	</PhotoSection>
		// </div>
		<PhotoSection className="">
			<PhotoList item={<PhotoRoundItem />} data={data} />
		</PhotoSection>
	);
};

export default PhotoModule;
