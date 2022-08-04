import './styles.css';
import { ProList } from '@ant-design/pro-list';
import { Drawer, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';

export default function App() {
	const [visible, setVisible] = useState(false);

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<Button
				onClick={() => {
					setVisible(true);
				}}
			>
				Open
			</Button>
			<Drawer
				visible={visible}
				onClose={() => {
					setVisible(false);
				}}
			>
				asdsad
			</Drawer>
			<ProList />
		</div>
	);
}
