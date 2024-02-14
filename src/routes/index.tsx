import { component$ } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";


export const useUploadFileAction = routeAction$(
	async (data, requestEvent) => {

	// const formData = data;
	const formData = await requestEvent.request.formData();
	console.log(formData);
});


export default component$(() => {
	const useAction = useUploadFileAction();
	return (
		<div class="p-2">
			<Form action={useAction} class="space-y-4">
				<div>
					<input type="file" name="file[]" multiple={true} id="file" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="Images" required />
				</div>
				<button type="submit" class="w-full text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Valider</button>
			</Form>
		</div>
	);
})