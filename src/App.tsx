function App() {
	return (
		<section className='flex px-6 font-Inter text-white justify-center  bg-colors-grey900 items-center w-screen h-screen '>
			<div className='flex flex-col w-full max-w-[390px] gap-6 p-6 min-[400px]:p-8 items-center bg-colors-grey800 rounded-2xl '>
				<img
					className='rounded-full w-24'
					src={'./avatar-jessica.jpeg'}
					alt='user avatar'
				/>

				<div className='text-center'>
					<h2 className='font-semibold text-[24px]'>Jessica Randall</h2>
					<p className='mt-1.5 text-[#C5F72B] transition text-sm font-semibold'>London, United Kingdom</p>
				</div>

				<p className='text-gray-200 text-sm'>"Front-end developer and avid reader."</p>

				<ul className='w-full flex flex-col gap-4'>
					<li className='li'>GitHub</li>
					<li className='li'>Frontend Mentor</li>
					<li className='li'>LinkedIn</li>
					<li className='li'>Twitter</li>
					<li className='li'>Instagram</li>
				</ul>
			</div>
		</section>
	);
}

export default App;
